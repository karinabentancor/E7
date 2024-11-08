// Elementos del DOM
const subtotalInput = document.getElementById("subtotal"); // Input donde se pone el subtotal
const shippingTypeSelect = document.getElementById("shipping-type"); // Dropdown de tipo de envío
const shippingCostInput = document.getElementById("shipping-cost"); // Input donde se muestra el costo de envío
const totalInput = document.getElementById("total"); // Input donde se muestra el total

// Función para calcular los costos en tiempo real
function updateCosts() {
    // Obtener el valor del subtotal (como número)
    const subtotal = parseFloat(subtotalInput.value) || 0;

    // Obtener el porcentaje de envío basado en la opción seleccionada
    const shippingPercent = parseFloat(shippingTypeSelect.selectedOptions[0].dataset.percent) || 0;

    // Calcular el costo de envío (subtotal * porcentaje de envío)
    const shippingCost = (subtotal * shippingPercent) / 100;
    
    // Mostrar el costo de envío
    shippingCostInput.value = shippingCost.toFixed(2); // Redondear a 2 decimales

    // Calcular el total (subtotal + costo de envío)
    const total = subtotal + shippingCost;
    
    // Mostrar el total
    totalInput.value = total.toFixed(2); // Redondear a 2 decimales
}

// Evento para detectar cambios en el subtotal (se ejecuta cuando el usuario lo cambia)
subtotalInput.addEventListener("input", updateCosts);

// Evento para detectar cambios en el tipo de envío (se ejecuta cuando el usuario cambia la opción)
shippingTypeSelect.addEventListener("change", updateCosts);

// Llamamos a la función de actualización cuando se cargue la página para mostrar los valores iniciales
document.addEventListener("DOMContentLoaded", updateCosts);
