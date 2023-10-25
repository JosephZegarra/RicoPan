<?php
session_start();

if (isset($_POST['producto']) && isset($_POST['precio'])) {
    $producto = $_POST['producto'];
    $precio = $_POST['precio'];

    // Inicializa el carrito si aún no existe en la sesión
    if (!isset($_SESSION['carrito'])) {
        $_SESSION['carrito'] = array();
        $_SESSION['total'] = 0;
    }

    // Agrega el producto y su precio al carrito
    $_SESSION['carrito'][] = array('producto' => $producto, 'precio' => $precio);
    $_SESSION['total'] += $precio;
}

// Redirige de vuelta a la página de productos
header('Location: productos.php');
?>