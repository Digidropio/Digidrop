<?php
/**
 * Created by PhpStorm.
 * User: alexburrows
 * Date: 11/07/2017
 * Time: 21:59
 */

namespace Drupal\dd_map\Plugin\Block;


use Drupal\Core\Block\BlockBase;

/**
 * Creates a map block
 *
 * @Block(
 *   id = "dd_map",
 *   admin_label = @Translation("Map"),
 *   category = @Translation("Digidrop"),
 * )
 */
class MapBlock extends BlockBase {

  public function build() {
    return array(
      '#type' => 'markup',
      '#markup' => '<div id="map"></div>',
    );
  }

}