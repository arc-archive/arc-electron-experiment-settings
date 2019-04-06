/**
@license
Copyright 2018 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import {PolymerElement} from '../../@polymer/polymer/polymer-element.js';
import '../../@polymer/paper-item/paper-item.js';
import '../../@polymer/paper-item/paper-item-body.js';
import '../../@polymer/paper-toggle-button/paper-toggle-button.js';
import '../../@polymer/iron-flex-layout/iron-flex-layout.js';
import '../../@polymer/paper-styles/shadow.js';
import {ArcSettingsPanelMixin} from '../../@advanced-rest-client/arc-settings-panel-mixin/arc-settings-panel-mixin.js';
import '../../@advanced-rest-client/arc-settings-panel-mixin/arc-settings-panel-styles.js';
import {html} from '../../@polymer/polymer/lib/utils/html-tag.js';
/**
 * `arc-electron-experiment-settings`
 *
 * Experiments settings panel for ARC
 *
 * ## Styling
 *
 * `<arc-electron-experiment-settings>` provides the following custom
 * properties and mixins for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--arc-request-settings-panel` | Mixin applied to this elment | `{}`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 * @memberof UiElements
 * @appliesMixin ArcSettingsPanelMixin
 */
export class ArcElectronExperimentSettings extends ArcSettingsPanelMixin(PolymerElement) {
  static get template() {
    return html`
    <style include="arc-settings-panel-styles">
    :host {
      display: block;
      @apply --arc-request-settings-panel;
    }

    [hidden] {
      display: none !important;
    }
    </style>
    <h2 class="panel-title">Experiments</h2>
    <p class="experiments-info">Experimental features may be removed without notification.</p>

    <div class="card">
      <paper-item class="clickable" on-click="_toggleOption">
        <paper-item-body two-line="">
          <div>Popup menu</div>
          <div secondary="">Allows to popup applicaiton menu to it's own window</div>
        </paper-item-body>
        <paper-toggle-button
          tabindex="-1"
          checked="{{popupMenuExperimentEnabled}}"
          on-click="_cancelEvent"></paper-toggle-button>
      </paper-item>

      <paper-item class="clickable" on-click="_toggleOption">
        <paper-item-body two-line="">
          <div>
            Validate SSL certificates
          </div>
          <div secondary="">Validate certificate when making a request</div>
        </paper-item-body>
        <paper-toggle-button
          tabindex="-1"
          checked="{{validateCertificates}}"
          on-click="_cancelEvent"></paper-toggle-button>
      </paper-item>

      <paper-item class="clickable" on-click="_toggleOption">
        <paper-item-body two-line="">
          <div>
            Native request
          </div>
          <div secondary="">Use platform's native HTTP transport instead of ARC's</div>
        </paper-item-body>
        <paper-toggle-button tabindex="-1" checked="{{nativeTransport}}" on-click="_cancelEvent"></paper-toggle-button>
      </paper-item>

      <paper-item class="clickable" on-click="_toggleOption">
        <paper-item-body two-line="">
          <div>
            Drag and drop support
          </div>
          <div secondary="">Enables request and project data drag and drop between different views</div>
        </paper-item-body>
        <paper-toggle-button tabindex="-1" checked="{{draggableEnabled}}" on-click="_cancelEvent"></paper-toggle-button>
      </paper-item>
    </div>
`;
  }

  static get properties() {
    return {
      /**
       * Collects information abour system variables when evaluating
       * request.
       */
      popupMenuExperimentEnabled: {
        type: Boolean,
        notify: true,
        observer: '_popupMenuChanged'
      },
      /**
       * Setting to validate certificates when making a request.
       * @type {Object}
       */
      validateCertificates: {
        type: Boolean,
        notify: true,
        observer: '_certsChanged'
      },
      /**
       * Enables platform's native HTTP transport.
       */
      nativeTransport: {
        type: Boolean,
        notify: true,
        observer: '_nativeTransportChanged'
      },
      /**
       * Enables requests/projects drag and drop between different views.
       */
      draggableEnabled: {
        type: Boolean,
        notify: true,
        observer: '_draggableChanged'
      }
    };
  }

  _popupMenuChanged(value) {
    this.updateSetting('popupMenuExperimentEnabled', value);
  }

  _certsChanged(value) {
    this.updateSetting('validateCertificates', value);
  }

  _nativeTransportChanged(value) {
    this.updateSetting('nativeTransport', value);
  }

  _draggableChanged(value) {
    this.updateSetting('draggableEnabled', value);
  }

  _processValues(values) {
    if (typeof values.popupMenuExperimentEnabled === 'undefined') {
      values.popupMenuExperimentEnabled = false;
    } else {
      values.popupMenuExperimentEnabled = this._boolValue(values.popupMenuExperimentEnabled);
    }
    if (typeof values.validateCertificates === 'undefined') {
      values.validateCertificates = false;
    } else {
      values.validateCertificates = this._boolValue(values.validateCertificates);
    }
    if (typeof values.nativeTransport === 'undefined') {
      values.nativeTransport = false;
    } else {
      values.nativeTransport = this._boolValue(values.nativeTransport);
    }
    if (typeof values.draggableEnabled === 'undefined') {
      values.draggableEnabled = false;
    } else {
      values.draggableEnabled = this._boolValue(values.draggableEnabled);
    }
    return values;
  }

  _setSettings(values) {
    this.__settingsRestored = false;
    this.popupMenuExperimentEnabled = values.popupMenuExperimentEnabled;
    this.validateCertificates = values.validateCertificates;
    this.nativeTransport = values.nativeTransport;
    this.draggableEnabled = values.draggableEnabled;
    this.__settingsRestored = true;
  }

  _settingsChanged(key, value) {
    this.__settingsRestored = false;
    switch (key) {
      case 'popupMenuExperimentEnabled':
      case 'validateCertificates':
      case 'nativeTransport':
      case 'draggableEnabled':
        this[key] = value;
        break;
    }
    this.__settingsRestored = true;
  }
}
window.customElements.define('arc-electron-experiment-settings', ArcElectronExperimentSettings);
