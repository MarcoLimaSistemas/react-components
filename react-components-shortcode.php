<?php
/**
 * Plugin Name: React Components Shortcode
 * Description: A plugin that adds a shortcode to render a React component.
 * Version: 1.0
 * Author: Squad GD
 */
// Enqueue styles globally if needed
function rcs_enqueue_script()
{
	
		$file_path = plugin_dir_path(__FILE__) . '/observerElements.js';
		wp_enqueue_script('observer_elements', plugin_dir_url(__FILE__) . 'observerElements.js', array(), filemtime($file_path), true);
	
}
add_action('wp_enqueue_scripts', 'rcs_enqueue_script', 10);


function rcs_to_camel_case($string) {
    $string = strtolower($string);
    $string = ucwords($string, "-");
    $string = str_replace("-", "", $string);
    return lcfirst($string);
}

// Função que define o shortcode genérico para qualquer componente
function rcs_register_component_shortcode($component_name, $default_atts_callback) {
 
    add_shortcode("react-component-$component_name", function($atts) use ($component_name, $default_atts_callback) {
        $atts = shortcode_atts(
            $default_atts_callback(),
            $atts,
            "react-component-$component_name" // Nome do shortcode com o prefixo
        );
       
        // Definir o nome do arquivo JavaScript com base no nome do componente
        $js_file_name = rcs_to_camel_case($component_name) . '.js';

        // Enfileirar o script JavaScript dinamicamente
        wp_enqueue_script(
            "react_component_$component_name",
            plugin_dir_url(__FILE__) . $js_file_name,
            ["wp-element"],
            "0.1.0",
            true
        );

        $dynamic_id = "react-component-$component_name-" . $atts['id'];

        // Encode $atts como JSON
        $encoded_atts = json_encode($atts);

        // Retornar o elemento com os atributos necessários
        return "<div id='$dynamic_id' data-dynamic-id='$dynamic_id' data-props='" . esc_attr($encoded_atts) . "'></div>";
    });
}

function default_select_search_atts() {
    return array(
        'label' => 'label default:',
        'id' => 'select-search-default',
        'options' => array(
            array('label' => 'Opção 1', 'id' => 1),
            array('label' => 'Opção 2', 'id' => 2),
            array('label' => 'Opção 3', 'id' => 3),
            // Adicione mais opções conforme necessário
        )
    );
}
function default_input_test_atts() {
    return array(
        'label' => 'label default:',
        'id' => 'input-test-default',
        'options' => array(
            array('label' => 'Opção 1', 'id' => 1),
            array('label' => 'Opção 2', 'id' => 2),
            array('label' => 'Opção 3', 'id' => 3),
            // Adicione mais opções conforme necessário
        )
    );
}
// Adicione a chamada de 'init' para a função rcs_register_component_shortcode
add_action('init', function() {
    rcs_register_component_shortcode('select-search', 'default_select_search_atts');
    rcs_register_component_shortcode('fragoso-component', 'default_input_test_atts');
    rcs_register_component_shortcode('larissa-component', 'default_input_test_atts');
});