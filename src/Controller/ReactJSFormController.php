<?php

namespace Drupal\mysearch\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class ReactJSFormController.
 *
 * @package Drupal\mysearch\Controller
 */
class ReactJSFormController extends ControllerBase {

  /**
   * Form.
   *
   * @return string
   *   Return Hello string.
   */
  public function form() {
    return [
        '#markup' => '<div id="content"></div>',
        '#attached' => [
            'library' =>  [
                'mysearch/react.min',
                'mysearch/react.dom.min',
                'mysearch/react.form'
            ],
        ],
    ];
  }

}
