# Raygun Exception Handler
[![Build Status](https://travis-ci.org/Reekoh/raygun-exception-handler.svg)](https://travis-ci.org/Reekoh/raygun-exception-handler)
![Dependencies](https://img.shields.io/david/Reekoh/raygun-exception-handler.svg)
![Dependencies](https://img.shields.io/david/dev/Reekoh/raygun-exception-handler.svg)
![Built With](https://img.shields.io/badge/built%20with-gulp-red.svg)

Raygun Exception Handler Plugin for the Reekoh IoT Platform. Integrates a Reekoh Instance with Raygun to log exceptions happening in a certain topology.

## Description
This Plugin logs all exceptions thrown in a Reekoh topology to Raygun.io for easier bug tracking and fixing if required.

## Configuration
To configure this plugin, a Raygun.io account and application is needed in order to provide a Raygun.io Application API Key.
This API Key is then injected to the plugin from the platform.