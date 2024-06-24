
document.addEventListener("DOMContentLoaded", () => {
    // Função assíncrona para carregar e renderizar o componente dinamicamente
    const loadAndRenderComponent = async (element, componentName, props) => {
        try {
            // Importar dinamicamente o componente com base no nome fornecido nos atributos
            const { default: DynamicComponent } = await import(`./components/${componentName}.js`);
            // Renderizar o componente React
            ReactDOM.render(React.createElement(DynamicComponent, props), element);
        } catch (error) {
            console.error(`Erro ao carregar o componente ${componentName}:`, error);
        }
    };

    // Selecionar todos os elementos com o atributo 'data-dynamic-id'
    const elementsWithDynamicId = document.querySelectorAll('[data-dynamic-id]');

    // Função para extrair o nome do componente
    const extractComponentName = (dynamicId) => {
        const parts = dynamicId.split('-').slice(2, -1); // Pega tudo entre o segundo hífen e o último hífen
        const camelCaseName = parts.map((part, index) => {
            if (index === 0) {
                return part;
            }
            return part.charAt(0).toUpperCase() + part.slice(1);
        }).join('');
        return camelCaseName;
    };
    // Iterar sobre cada elemento encontrado
    elementsWithDynamicId.forEach(element => {
        // Obter o nome do componente do atributo 'data-dynamic-id'
        const componentName = extractComponentName(element.dataset.dynamicId);

        // Criar um MutationObserver para observar mudanças nos atributos do elemento
        const observer = new MutationObserver(async mutations => {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-props') {
                    // Obter e analisar os novos atributos
                    const newProps = JSON.parse(element.getAttribute("data-props"));

                    // Mesclar novos e antigos atributos
                    const previousProps = JSON.parse(element.getAttribute("data-previous-props"));
                    const mergedProps = { ...previousProps, ...newProps };

                    // Atualizar os atributos antigos
                    element.setAttribute("data-previous-props", JSON.stringify(mergedProps));

                    // Carregar e renderizar dinamicamente o componente correspondente
                    await loadAndRenderComponent(element, componentName, mergedProps);
                }
            }
        });

        // Observar mudanças nos atributos do elemento
        observer.observe(element, { attributes: true });

        // Configurar os atributos iniciais como os atributos antigos
        element.setAttribute("data-previous-props", element.getAttribute("data-props"));

        // Obter os atributos iniciais e renderizar o componente React inicial
        const initialProps = JSON.parse(element.getAttribute("data-props"));

        // Carregar e renderizar dinamicamente o componente correspondente
        loadAndRenderComponent(element, componentName, initialProps);
    });
});