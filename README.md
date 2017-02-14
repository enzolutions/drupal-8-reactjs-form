# Drupal 8 Controller using a ReactJS Form

Module example that implemetent a ReactJS form inside a Drupal 8 controller

For detail information about this code read the Blog post [http://www.anexusit.com/blog/how-to-load-js-and-css-libraries-a-drupal-8-controller](http://www.anexusit.com/blog/how-to-load-js-and-css-libraries-a-drupal-8-controller)

## Install Drupal

You could download drupal using composer using the following command.

```
$ composer create-project drupal-composer/drupal-project:8.x-dev some-dir --stability dev --no-interaction
```

After that use [Drupal Console](http://drupalconsole.com) to install drupal using interactive mode.

```
$ drupal site:install
```

## Download React Libraries

Inside your Drupal web directory run the following commands

```
$ mkdir -p libraries/reactjs/build
$ wget https://unpkg.com/react@15/dist/react.js
$ wget https://unpkg.com/react@15/dist/react.min.js
$ wget https://unpkg.com/react-dom@15/dist/react-dom.js
$ wget https://unpkg.com/react-dom@15/dist/react-dom.min.js
```
You could change the **15** for the major release of ReactJs that do you need.

## Install Drupal module

Use the following Drupal Console command to install the module

```
$ drupal module:install mysearch
```

## Usage

The module register a new controller in the path /mysearch, use your browser to visit the URL: http://example.com/mysearch.

Enjoy it
