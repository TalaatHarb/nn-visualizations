const canvas = document.getElementById('mlpCanvas');
const ctx = canvas.getContext('2d');

// Define MLP layers (you can change the number of neurons per layer)
const layers = [
    { neurons: 3 },  // Input layer (3 neurons)
    { neurons: 5 },  // Hidden layer (5 neurons)
    { neurons: 4 },  // Hidden layer (4 neurons)
    { neurons: 2 }   // Output layer (2 neurons)
];

// Neuron dimensions
const neuronRadius = 20;
const layerSpacing = 200;  // Distance between layers
const neuronSpacing = 80;  // Distance between neurons in a layer

// Draw neurons and connections
function drawMLP() {
    let layerX = layerSpacing / 2;
    layers.forEach((layer, layerIndex) => {
        const layerYStart = (canvas.height - (layer.neurons * neuronSpacing)) / 2;

        for (let i = 0; i < layer.neurons; i++) {
            const neuronY = layerYStart + i * neuronSpacing;

            // Draw neuron (circle)
            drawNeuron(layerX, neuronY);

            // Draw connections to next layer if it exists
            if (layerIndex < layers.length - 1) {
                const nextLayer = layers[layerIndex + 1];
                const nextLayerYStart = (canvas.height - (nextLayer.neurons * neuronSpacing)) / 2;
                for (let j = 0; j < nextLayer.neurons; j++) {
                    const nextNeuronY = nextLayerYStart + j * neuronSpacing;
                    drawConnection(layerX + neuronRadius, neuronY, layerX + layerSpacing - neuronRadius, nextNeuronY);
                }
            }
        }
        layerX += layerSpacing;
    });
}

function drawNeuron(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, neuronRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#4CAF50';
    ctx.fill();
    ctx.strokeStyle = '#333';
    ctx.stroke();
    ctx.closePath();
}

function drawConnection(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#bbb';
    ctx.stroke();
    ctx.closePath();
}

drawMLP();
