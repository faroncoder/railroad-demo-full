// Import Railroad packages from npm
import RAILROAD from 'railroad-runtime';
import RailroadToasts from 'railroad-toasts';
import RailroadLoader from 'railroad-loader';

// Expose to window for inline event handlers
window.RAILROAD = RAILROAD;
window.toast = RailroadToasts.toast;
window.confirm = RailroadToasts.confirm;
window.RailroadLoader = RailroadLoader;

// Demo functions
window.demoLoader = function() {
  RailroadLoader.show(['Loading demo...', 'Processing...', 'Almost done...']);
  setTimeout(() => {
    RailroadLoader.hide();
    toast('Loader demo complete', 'success');
  }, 2000);
};

window.demoCustomLoader = function() {
  RailroadLoader.show([
    'Step 1: Initializing...',
    'Step 2: Fetching data...',
    'Step 3: Rendering...',
    'Step 4: Complete!'
  ]);
  setTimeout(() => {
    RailroadLoader.hide();
    toast('Custom loader sequence done', 'info');
  }, 3000);
};

window.loadPanelA = function() {
  const target = document.getElementById('swap-target');
  const randomId = Math.floor(Math.random() * 10000);
  
  RailroadLoader.show(['Loading Panel A...']);
  setTimeout(() => {
    target.innerHTML = `
      <div class="swapped-panel panel-a">
        <h3>✅ Panel A Loaded</h3>
        <p style="color: #d1d5db; margin: 15px 0;">This content was swapped dynamically.</p>
        <p style="color: #d1d5db;">But the behaviors still work:</p>
        <button onclick="toast('Panel A toast works!', 'success')" class="btn btn-success">Toast from Panel A</button>
        <button onclick="toast('Confirmed: behaviors survived swap', 'info')" class="btn btn-info">Another Toast</button>
        <div class="proof-text">
          <strong>Proof:</strong> These buttons were created after the page loaded, 
          but toast() still works because Railroad Runtime survived the swap.
          <br><strong>Random ID:</strong> ${randomId}
        </div>
      </div>
    `;
    RAILROAD.rebind(target, 'load-panel-a');
    RailroadLoader.hide();
  }, 500);
};

window.loadPanelB = function() {
  const target = document.getElementById('swap-target');
  const randomId = Math.floor(Math.random() * 10000);
  
  RailroadLoader.show(['Loading Panel B...']);
  setTimeout(() => {
    target.innerHTML = `
      <div class="swapped-panel panel-b">
        <h3>🔵 Panel B Loaded</h3>
        <p style="color: #d1d5db; margin: 15px 0;">Different content, same result.</p>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button onclick="toast('Success from B', 'success')" class="btn btn-success">Success</button>
          <button onclick="toast('Error from B', 'error')" class="btn btn-error">Error</button>
          <button onclick="toast('Warning from B', 'warn')" class="btn btn-warn">Warning</button>
          <button onclick="toast('Info from B', 'info')" class="btn btn-info">Info</button>
        </div>
        <div class="proof-text">
          <strong>Random number:</strong> ${randomId} 
          (proves this is fresh dynamically-generated content)
        </div>
      </div>
    `;
    RAILROAD.rebind(target, 'load-panel-b');
    RailroadLoader.hide();
  }, 500);
};

window.manualUpdate = function() {
  const target = document.getElementById('swap-target');
  const randomId = Math.floor(Math.random() * 10000);
  
  target.innerHTML = `
    <div class="swapped-panel panel-manual">
      <h3>⚠️ Manual Update</h3>
      <p style="color: #d1d5db; margin: 15px 0;">This was inserted via <code>innerHTML</code>.</p>
      <p style="color: #d1d5db;">We called <code>RAILROAD.rebind()</code> explicitly:</p>
      <button onclick="toast('Manual update toast works!', 'warn')" class="btn btn-warn">Toast from Manual</button>
      <button onclick="toast('Proof: rebind() made this work', 'info')" class="btn btn-info">Another Toast</button>
      <div class="proof-text">
        <strong>ID:</strong> ${randomId} (proves this is fresh client-side content)
      </div>
    </div>
  `;
  
  RAILROAD.rebind(target, 'manual-demo-update');
  toast('Manual DOM update complete', 'success');
};

// Debug panel
let rebindCount = 0;

function updateDebug() {
  const packages = [];
  if (typeof window.RAILROAD !== 'undefined') packages.push('runtime');
  if (typeof window.RailroadToasts !== 'undefined') packages.push('toasts');
  if (typeof window.RailroadLoader !== 'undefined') packages.push('loader');
  
  const packagesEl = document.getElementById('debug-packages');
  const runtimeEl = document.getElementById('debug-runtime');
  
  if (packagesEl) {
    packagesEl.textContent = packages.length > 0 ? packages.join(', ') : 'None';
  }
  
  if (runtimeEl) {
    runtimeEl.textContent = window.RAILROAD && window.RAILROAD.initialized ? 'Yes' : 'No';
  }
}

// Hook into RAILROAD to track rebinds
if (window.RAILROAD) {
  const originalRebind = RAILROAD.rebind.bind(RAILROAD);
  RAILROAD.rebind = function(root, source) {
    rebindCount++;
    const rebindEl = document.getElementById('debug-rebind');
    const countEl = document.getElementById('debug-count');
    
    if (rebindEl) rebindEl.textContent = source || 'unknown';
    if (countEl) countEl.textContent = rebindCount;
    
    return originalRebind(root, source);
  };
}

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(updateDebug, 100);
  
  console.log('%c🚂 Railroad Demo Ready (Webpack Build)', 'color: #58a6ff; font-size: 16px; font-weight: bold');
  console.log('%cTry:', 'color: #9ca3af');
  console.log('  toast("Hello", "success")');
  console.log('  RailroadLoader.show()');
  console.log('  RAILROAD.listModules()');
});
