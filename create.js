
// FEATURE TEMPLATES 
const FEATURES = [
  // Hair
  { id: 'hair1', name: 'Hair 1', category: 'hair', img: '<img src="face elements/hair/hair 1.png">' },
  { id: 'hair2', name: 'Hair 2', category: 'hair', img: '<img src="face elements/hair/hair 2.png">' },
  { id: 'hair3', name: 'Hair 3', category: 'hair', img: '<img src="face elements/hair/hair 3.png">' },
  { id: 'hair4', name: 'Hair 4', category: 'hair', img: '<img src="face elements/hair/hair 4.png">' },
  { id: 'hair5', name: 'Hair 5', category: 'hair', img: '<img src="face elements/hair/hair 5.png">' },
  { id: 'hair6', name: 'Hair 6', category: 'hair', img: '<img src="face elements/hair/hair 6.png">' },
  { id: 'hair7', name: 'Hair 7', category: 'hair', img: '<img src="face elements/hair/hair 7.png">' },
  { id: 'hair8', name: 'Hair 8', category: 'hair', img: '<img src="face elements/hair/hair 8.png">' },
  { id: 'hair9', name: 'Hair 9', category: 'hair', img: '<img src="face elements/hair/hair 9.png">' },
  { id: 'hair10', name: 'Hair 10', category: 'hair', img: '<img src="face elements/hair/hair 10.png">' },
  { id: 'hair11', name: 'Hair 11', category: 'hair', img: '<img src="face elements/hair/hair 11.png">' },
  { id: 'hair12', name: 'Hair 12', category: 'hair', img: '<img src="face elements/hair/hair 12.png">' },
  { id: 'hair13', name: 'Hair 13', category: 'hair', img: '<img src="face elements/hair/hair 13.png">' },
  { id: 'hair14', name: 'Hair 14', category: 'hair', img: '<img src="face elements/hair/hair 14.png">' },
  { id: 'hair15', name: 'Hair 15', category: 'hair', img: '<img src="face elements/hair/hair 15.png">' },
  { id: 'hair16', name: 'Hair 16', category: 'hair', img: '<img src="face elements/hair/hair 16.png">' },
  { id: 'hair17', name: 'Hair 17', category: 'hair', img: '<img src="face elements/hair/hair 17.png">' },
  { id: 'hair18', name: 'Hair 18', category: 'hair', img: '<img src="face elements/hair/hair 18.png">' },
  { id: 'hair19', name: 'Hair 19', category: 'hair', img: '<img src="face elements/hair/hair 19.png">' },
  { id: 'hair20', name: 'Hair 20', category: 'hair', img: '<img src="face elements/hair/hair 20.png">' },

  // Eyes
  { id: 'eyes1', name: 'Eyes 1', category: 'eyes', img: '<img src="face elements/eyes/eyes 1.png">' },
  { id: 'eyes2', name: 'Eyes 2', category: 'eyes', img: '<img src="face elements/eyes/eyes 2.png">' },
  { id: 'eyes3', name: 'Eyes 3', category: 'eyes', img: '<img src="face elements/eyes/eyes 3.png">' },
  { id: 'eyes4', name: 'Eyes 4', category: 'eyes', img: '<img src="face elements/eyes/eyes 4.png">' },
  { id: 'eyes5', name: 'Eyes 5', category: 'eyes', img: '<img src="face elements/eyes/eyes 5.png">' },
  { id: 'eyes6', name: 'Eyes 6', category: 'eyes', img: '<img src="face elements/eyes/eyes 6.png">' },
  { id: 'eyes7', name: 'Eyes 7', category: 'eyes', img: '<img src="face elements/eyes/eyes 7.png">' },
  { id: 'eyes8', name: 'Eyes 8', category: 'eyes', img: '<img src="face elements/eyes/eyes 8.png">' },
  { id: 'eyes9', name: 'Eyes 9', category: 'eyes', img: '<img src="face elements/eyes/eyes 9.png">' },

  // Noses
  { id: 'nose1', name: 'Nose 1', category: 'nose', img: '<img src="face elements/noses/nose 1.png">' },
  { id: 'nose2', name: 'Nose 2', category: 'nose', img: '<img src="face elements/noses/nose 2.png">' },
  { id: 'nose3', name: 'Nose 3', category: 'nose', img: '<img src="face elements/noses/nose 3.png">' },
  { id: 'nose4', name: 'Nose 4', category: 'nose', img: '<img src="face elements/noses/nose 4.png">' },
  { id: 'nose5', name: 'Nose 5', category: 'nose', img: '<img src="face elements/noses/nose 5.png">' },
  { id: 'nose6', name: 'Nose 6', category: 'nose', img: '<img src="face elements/noses/nose 6.png">' },
  { id: 'nose7', name: 'Nose 7', category: 'nose', img: '<img src="face elements/noses/nose 7.png">' },
  { id: 'nose8', name: 'Nose 8', category: 'nose', img: '<img src="face elements/noses/nose 8.png">' },
  { id: 'nose9', name: 'Nose 9', category: 'nose', img: '<img src="face elements/noses/nose 9.png">' },
  { id: 'nose10', name: 'Nose 10', category: 'nose', img: '<img src="face elements/noses/nose 10.png">' },
  { id: 'nose11', name: 'Nose 11', category: 'nose', img: '<img src="face elements/noses/nose 11.png">' },

  // Eyebrows
  { id: 'eyebrows1', name: 'Eyebrows 1', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 1.png">' },
  { id: 'eyebrows2', name: 'Eyebrows 2', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 2.png">' },
  { id: 'eyebrows3', name: 'Eyebrows 3', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 3.png">' },
  { id: 'eyebrows4', name: 'Eyebrows 4', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 4.png">' },
  { id: 'eyebrows5', name: 'Eyebrows 5', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 5.png">' },
  { id: 'eyebrows6', name: 'Eyebrows 6', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 6.png">' },
  { id: 'eyebrows7', name: 'Eyebrows 7', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 7.png">' },
  { id: 'eyebrows8', name: 'Eyebrows 8', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 8.png">' },
  { id: 'eyebrows9', name: 'Eyebrows 9', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 9.png">' },
  { id: 'eyebrows10', name: 'Eyebrows 10', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 10.png">' },
  { id: 'eyebrows11', name: 'Eyebrows 11', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 11.png">' },
  { id: 'eyebrows12', name: 'Eyebrows 12', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 12.png">' },
  { id: 'eyebrows13', name: 'Eyebrows 13', category: 'eyebrows', img: '<img src="face elements/eyebrows/eyebrows 13.png">' },

  // Ears
  { id: 'ears1', name: 'Ears 1', category: 'ears', img: '<img src="face elements/ears/ears 1.png">' },
  { id: 'ears2', name: 'Ears 2', category: 'ears', img: '<img src="face elements/ears/ears 2.png">' },
  { id: 'ears3', name: 'Ears 3', category: 'ears', img: '<img src="face elements/ears/ears 3.png">' },
  { id: 'ears4', name: 'Ears 4', category: 'ears', img: '<img src="face elements/ears/ears 4.png">' },
  { id: 'ears5', name: 'Ears 5', category: 'ears', img: '<img src="face elements/ears/ears 5.png">' },
  { id: 'ears6', name: 'Ears 6', category: 'ears', img: '<img src="face elements/ears/ears 6.png">' },
  { id: 'ears7', name: 'Ears 7', category: 'ears', img: '<img src="face elements/ears/ears 7.png">' },
  { id: 'ears8', name: 'Ears 8', category: 'ears', img: '<img src="face elements/ears/ears 8.png">' },
  { id: 'ears9', name: 'Ears 9', category: 'ears', img: '<img src="face elements/ears/ears 9.png">' },
  { id: 'ears10', name: 'Ears 10', category: 'ears', img: '<img src="face elements/ears/ears 10.png">' },

  // Lips
  { id: 'lips1', name: 'Lips 1', category: 'lips', img: '<img src="face elements/lips/lips 1.png">' },
  { id: 'lips2', name: 'Lips 2', category: 'lips', img: '<img src="face elements/lips/lips 2.png">' },
  { id: 'lips3', name: 'Lips 3', category: 'lips', img: '<img src="face elements/lips/lips 3.png">' },
  { id: 'lips4', name: 'Lips 4', category: 'lips', img: '<img src="face elements/lips/lips 4.png">' },
  { id: 'lips5', name: 'Lips 5', category: 'lips', img: '<img src="face elements/lips/lips 5.png">' },
  { id: 'lips6', name: 'Lips 6', category: 'lips', img: '<img src="face elements/lips/lips 6.png">' },

  // Facial Hair
  { id: 'facial_hair1', name: 'Facial Hair 1', category: 'facial_hair', img: '<img src="face elements/facial hair/facial_hair 1.png">' },
  { id: 'facial_hair2', name: 'Facial Hair 2', category: 'facial_hair', img: '<img src="face elements/facial hair/facial_hair 2.png">' },
  { id: 'facial_hair3', name: 'Facial Hair 3', category: 'facial_hair', img: '<img src="face elements/facial hair/facial_hair 3.png">' },
  { id: 'facial_hair4', name: 'Facial Hair 4', category: 'facial_hair', img: '<img src="face elements/facial hair/facial_hair 4.png">' },
  { id: 'facial_hair5', name: 'Facial Hair 5', category: 'facial_hair', img: '<img src="face elements/facial hair/facial_hair 5.png">' },
  { id: 'facial_hair6', name: 'Facial Hair 6', category: 'facial_hair', img: '<img src="face elements/facial hair/facial_hair 6.png">' },
  { id: 'facial_hair7', name: 'Facial Hair 7', category: 'facial_hair', img: '<img src="face elements/facial hair/facial_hair 7.png">' },
  { id: 'facial_hair8', name: 'Facial Hair 8', category: 'facial_hair', img: '<img src="face elements/facial hair/facial_hair 8.png">' },
  { id: 'facial_hair9', name: 'Facial Hair 9', category: 'facial_hair', img: '<img src="face elements/facial hair/facial_hair 9.png">' },
  { id: 'facial_hair10', name: 'Facial Hair 10', category: 'facial_hair', img: '<img src="face elements/facial hair/facial_hair 10.png">' },

  // Jaws
  { id: 'jaw1', name: 'Jaw 1', category: 'Jaw', img: '<img src="face elements/jaw/jaw 1.png">' },
  { id: 'jaw2', name: 'Jaw 2', category: 'Jaw', img: '<img src="face elements/jaw/jaw 2.png">' },
  { id: 'jaw3', name: 'Jaw 3', category: 'Jaw', img: '<img src="face elements/jaw/jaw 3.png">' },
  { id: 'jaw4', name: 'Jaw 4', category: 'Jaw', img: '<img src="face elements/jaw/jaw 4.png">' },
  { id: 'jaw5', name: 'Jaw 5', category: 'Jaw', img: '<img src="face elements/jaw/jaw 5.png">' },
  { id: 'jaw6', name: 'Jaw 6', category: 'Jaw', img: '<img src="face elements/jaw/jaw 6.png">' },
  { id: 'jaw7', name: 'Jaw 7', category: 'Jaw', img: '<img src="face elements/jaw/jaw 7.png">' },
  { id: 'jaw8', name: 'Jaw 8', category: 'Jaw', img: '<img src="face elements/jaw/jaw 8.png">' },
  { id: 'jaw9', name: 'Jaw 9', category: 'Jaw', img: '<img src="face elements/jaw/jaw 9.png">' },
  { id: 'jaw10', name: 'Jaw 10', category: 'Jaw', img: '<img src="face elements/jaw/jaw 10.png">' },
  { id: 'jaw11', name: 'Jaw 11', category: 'Jaw', img: '<img src="face elements/jaw/jaw 11.png">' },
];

// ELEMENTS & STATE 
const thumbGrid = document.getElementById('thumbGrid');
const stage = document.getElementById('stage');
const layerList = document.getElementById('layerList');

let selected = null; // Currently selected  element
let zIndexCounter = 1;
const items = []; // Track items in order

// INITIALIZATION 

// Create thumbnails
FEATURES.forEach(feature => {
  const el = document.createElement('div');
  el.className = 'thumb';
  el.title = feature.name;
  el.dataset.featureId = feature.id;
  el.innerHTML = feature.img;
  el.addEventListener('click', () => addFeatureToStage(feature));
  thumbGrid.appendChild(el);
});

// Category filtering
const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.category;
    const thumbs = thumbGrid.querySelectorAll('.thumb');

    thumbs.forEach(thumb => {
      const featureId = thumb.dataset.featureId;
      const feature = FEATURES.find(f => f.id === featureId);
      if (cat === 'all' || feature.category === cat) {
        thumb.style.display = 'flex';
      } else {
        thumb.style.display = 'none';
      }
    });
  });
});

// FEATURE MANAGEMENT 

// Create new feature on stage
function addFeatureToStage(feature) {
  const wrapper = document.createElement('div');
  wrapper.className = 'layer-item';
  wrapper.dataset.id = feature.id;
  wrapper.dataset.name = feature.name;
  wrapper.dataset.scale = '1';
  wrapper.style.left = '50%';
  wrapper.style.top = '40%';
  wrapper.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)';
  wrapper.style.opacity = '1';
  wrapper.style.zIndex = ++zIndexCounter;

  // Attach the image
  wrapper.innerHTML = `<div class="box">${feature.img}</div>`;
  const img = wrapper.querySelector('img');

  if (img.complete) {
    wrapper.naturalWidth = img.naturalWidth;
    wrapper.naturalHeight = img.naturalHeight;
    wrapper.style.width = img.naturalWidth + 'px';
    wrapper.style.height = img.naturalHeight + 'px';
  } else {
    img.onload = () => {
      wrapper.naturalWidth = img.naturalWidth;
      wrapper.naturalHeight = img.naturalHeight;
      wrapper.style.width = img.naturalWidth + 'px';
      wrapper.style.height = img.naturalHeight + 'px';
    };
  }

  stage.appendChild(wrapper);
  makeDraggable(wrapper);
  selectItem(wrapper);
  items.push(wrapper);
  updateLayerList();
}

// Selection
function selectItem(el) {
  if (selected) selected.classList.remove('selected');
  selected = el;
  if (selected) selected.classList.add('selected');

  // Update UI controls to match selected values
  if (selected) {
    const tr = parseTransform(selected.style.transform);
    const scale = parseFloat(selected.dataset.scale) || 1;
    const rotate = tr.rotate || 0;
    const opacity = parseFloat(selected.style.opacity || 1);

    document.getElementById('scaleRange').value = Math.round(scale * 100);
    document.getElementById('rotateRange').value = Math.round(rotate);
    document.getElementById('opacityRange').value = Math.round(opacity * 100);
  }

  updateLayerList();
}

// Parse transform like "translate(-50%,-50%) scale(1.2) rotate(10deg)"
function parseTransform(t) {
  const out = {};
  if (!t) return out;

  const m = t.match(/scale\((-?[\d.]+)/);
  if (m) out.scale = parseFloat(m[1]);

  const r = t.match(/rotate\((-?[\d.]+)deg\)/);
  if (r) out.rotate = parseFloat(r[1]);

  return out;
}

// DRAGGING FUNCTIONALITY

// Make an element draggable (pointer events)
function makeDraggable(el) {
  let dragging = false, startX = 0, startY = 0, origCenterX = 0, origCenterY = 0;

  // Handle pointer down
  el.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    // Only left clicks
    el.setPointerCapture(e.pointerId);
    dragging = true;

    const rect = stage.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;

    // Compute current center pos in px
    const currentLeftPerc = parseFloat(el.style.left) / 100 || 0.5;
    const currentTopPerc = parseFloat(el.style.top) / 100 || 0.4;
    origCenterX = stage.clientWidth * currentLeftPerc;
    origCenterY = stage.clientHeight * currentTopPerc;

    selectItem(el);
  });

  // Move
  el.addEventListener('pointermove', (e) => {
    if (!dragging) return;

    const rect = stage.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const dx = px - startX;
    const dy = py - startY;
    const newCenterX = origCenterX + dx;
    const newCenterY = origCenterY + dy;
    const newLeftPerc = (newCenterX / stage.clientWidth) * 100;
    const newTopPerc = (newCenterY / stage.clientHeight) * 100;

    el.style.left = newLeftPerc + '%';
    el.style.top = newTopPerc + '%';
  });

  // Up
  el.addEventListener('pointerup', (e) => {
    dragging = false;
    try { el.releasePointerCapture(e.pointerId); } catch (e) { }
  });

  // Click to select (avoid selecting when dragging)
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    selectItem(el);
  });
}

// CONTROL HANDLERS 

// Scale control
document.getElementById('scaleRange').addEventListener('input', (e) => {
  if (!selected) return;
  const s = e.target.value / 100;
  const tObj = parseTransform(selected.style.transform);
  const rot = (tObj.rotate || 0);
  const flip = selected.dataset.flipped === '1' ? -1 : 1;
  selected.style.transform = `translate(-50%, -50%) scale(${s * flip}) rotate(${rot}deg)`;
  updateLayerList();
});

// Rotate control
document.getElementById('rotateRange').addEventListener('input', (e) => {
  if (!selected) return;
  const r = Number(e.target.value);
  const tObj = parseTransform(selected.style.transform);
  const scale = (tObj.scale || 1);
  const flip = selected.dataset.flipped === '1' ? -1 : 1;
  selected.style.transform = `translate(-50%, -50%) scale(${scale * flip}) rotate(${r}deg)`;
  updateLayerList();
});

// Opacity control
document.getElementById('opacityRange').addEventListener('input', (e) => {
  if (!selected) return;
  selected.style.opacity = (e.target.value / 100);
});

// Flip button
document.getElementById('flipBtn').addEventListener('click', () => {
  if (!selected) return;
  const t = parseTransform(selected.style.transform) || {};
  const scale = t.scale || 1;
  const rotate = t.rotate || 0;
  const flipped = selected.dataset.flipped === '1' ? '0' : '1';
  selected.dataset.flipped = flipped;
  const mult = flipped === '1' ? -1 : 1;
  selected.style.transform = `translate(-50%, -50%) scale(${scale * mult}) rotate(${rotate}deg)`;
});

// Delete button
document.getElementById('delBtn').addEventListener('click', () => {
  if (!selected) return;
  const idx = items.indexOf(selected);
  if (idx >= 0) items.splice(idx, 1);
  selected.remove();
  selected = null;
  updateLayerList();
});

// LAYER MANAGEMENT 

// Layer order controls
document.getElementById('bringForward').addEventListener('click', () => {
  if (!selected) return;
  selected.style.zIndex = ++zIndexCounter;
  updateLayerList();
});

document.getElementById('sendBack').addEventListener('click', () => {
  if (!selected) return;
  selected.style.zIndex = 0;
  updateLayerList();
});

// Update layer list UI
function updateLayerList() {
  layerList.innerHTML = '';
  const children = Array.from(stage.querySelectorAll('.layer-item'));

  // Sort by zIndex descending
  children.sort((a, b) => (parseInt(b.style.zIndex || 0) - parseInt(a.style.zIndex || 0)));

  children.forEach((c) => {
    const entry = document.createElement('div');
    entry.className = 'layer-entry' + (c === selected ? ' active' : '');
    entry.innerHTML = `<div class="label">${c.dataset.name || c.dataset.id || 'Feature'}</div>`;
    entry.addEventListener('click', () => {
      selectItem(c);
    });
    layerList.appendChild(entry);
  });
}

// EXPORT FUNCTIONALITY

// Export: rasterize the canvas and trigger download
document.getElementById('saveBtn').addEventListener('click', async () => {
  await exportCanvas('character.png');
});

// EVENT LISTENERS

// Stage click to deselect
stage.addEventListener('click', () => {
  if (selected) {
    selected.classList.remove('selected');
    selected = null;
    updateLayerList();
  }
});

// Clicking empty stage deselects
document.getElementById('stage').addEventListener('click', (e) => {
  if (e.target === stage) {
    if (selected) {
      selected.classList.remove('selected');
      selected = null;
      updateLayerList();
    }
  }
});

// Keyboard delete
window.addEventListener('keydown', (e) => {
  if ((e.key === 'Delete' || e.key === 'Backspace') && selected) {
    selected.remove();
    selected = null;
    updateLayerList();
  }
});

// MODAL HANDLERS

// Export button in modal
exportBtnModal.addEventListener('click', async () => {
  // Trigger export
  await exportCanvas('character.png');

  // Save to localStorage
  let savedCharacters = JSON.parse(localStorage.getItem('savedCharacters') || '[]');
  const character = { items: [] };

  // Get the items data
  const nodesForSave = Array.from(stage.querySelectorAll('.layer-item')).sort((a, b) => (parseInt(a.style.zIndex || 0) - parseInt(b.style.zIndex || 0)));
  nodesForSave.forEach(node => {
    const rectNode = node.getBoundingClientRect();
    const sx = rectNode.left - stage.getBoundingClientRect().left;
    const sy = rectNode.top - stage.getBoundingClientRect().top;
    const sw = rectNode.width;
    const sh = rectNode.height;
    const opacity = parseFloat(node.style.opacity || 1);
    const imgEl = node.querySelector('img');
    if (!imgEl) return;
    const flipped = node.dataset.flipped === '1';
    character.items.push({ sx, sy, sw, sh, opacity, src: imgEl.src, flipped });
  });

  savedCharacters.push(character);
  localStorage.setItem('savedCharacters', JSON.stringify(savedCharacters));

  // After save, proceed
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 100);
});

// Close modal if clicked outside
warningModal.addEventListener('click', (e) => {
  if (e.target === warningModal) {
    warningModal.classList.remove('show');
  }
});

// UTILITY FUNCTIONS

// Shared export function
async function exportCanvas(filename) {
  const rect = stage.getBoundingClientRect();
  const w = Math.round(rect.width);
  const h = Math.round(rect.height);
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);

  const nodes = Array.from(stage.querySelectorAll('.layer-item')).sort((a, b) => (parseInt(a.style.zIndex || 0) - parseInt(b.style.zIndex || 0)));

  for (const node of nodes) {
    const rectNode = node.getBoundingClientRect();
    const sx = rectNode.left - rect.left;
    const sy = rectNode.top - rect.top;
    const sw = rectNode.width;
    const sh = rectNode.height;
    const opacity = parseFloat(node.style.opacity || 1);
    const imgEl = node.querySelector('img');
    if (!imgEl) continue;

    await new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        ctx.save();
        ctx.globalAlpha = opacity;
        const flipped = node.dataset.flipped === '1';
        if (flipped) {
          ctx.translate(sx + sw / 2, sy + sh / 2);
          ctx.scale(-1, 1);
          ctx.drawImage(img, -sw / 2, -sh / 2, sw, sh);
        } else {
          ctx.drawImage(img, sx, sy, sw, sh);
        }
        ctx.restore();
        resolve();
      };
      img.onerror = () => resolve();
      img.src = imgEl.src;
    });
  }

  const dataUrl = canvas.toDataURL('image/png');

  // Trigger download
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

