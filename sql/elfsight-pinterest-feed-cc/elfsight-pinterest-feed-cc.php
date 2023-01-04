<?php
/*
Plugin Name: Elfsight Pinterest Feed CC
Description: Display Pinterest profile, boards and pins on your website.
Plugin URI: https://elfsight.com/pinterest-feed-widget/codecanyon/?utm_source=markets&utm_medium=codecanyon&utm_campaign=pinterest-feed&utm_content=plugin-site
Version: 1.2.0
Author: Elfsight
Author URI: https://elfsight.com/?utm_source=markets&utm_medium=codecanyon&utm_campaign=pinterest-feed&utm_content=plugins-list
*/

if (!defined('ABSPATH')) exit;


require_once('core/elfsight-plugin.php');

$elfsight_pinterest_feed_config_path = plugin_dir_path(__FILE__) . 'config.json';
$elfsight_pinterest_feed_config = json_decode(file_get_contents($elfsight_pinterest_feed_config_path), true);

new ElfsightPinterestFeedPlugin(
    array(
        'name' => esc_html__('Pinterest Feed'),
        'description' => esc_html__('Display Pinterest profile, boards and pins on your website'),
        'slug' => 'elfsight-pinterest-feed',
        'version' => '1.2.0',
        'text_domain' => 'elfsight-pinterest-feed',
        'editor_settings' => $elfsight_pinterest_feed_config['settings'],
        'editor_preferences' => $elfsight_pinterest_feed_config['preferences'],

        'plugin_name' => esc_html__('Elfsight Pinterest Feed'),
        'plugin_file' => __FILE__,
        'plugin_slug' => plugin_basename(__FILE__),

        'vc_icon' => plugins_url('assets/img/vc-icon.png', __FILE__),
        'menu_icon' => plugins_url('assets/img/menu-icon.png', __FILE__),

        'update_url' => esc_url('https://a.elfsight.com/updates/v1/'),
        'product_url' => esc_url('https://codecanyon.net/item/pinterest-feed-wordpress-pinterest-feed-plugin/23389883?ref=Elfsight'),
        'helpscout_plugin_id' => 110716
    )
);

?>
