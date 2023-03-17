<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->get('/orders', function (Request $request, Response $response) {
    $conn = $GLOBALS['connect'];
    $sql = 'select * from orders';
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    foreach ($result as $row) {
        array_push($data, $row);
    }

    $response->getBody()->write(json_encode($data, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK));
    return $response
        ->withHeader('Content-Type', 'application/json; charset=utf-8')
        ->withStatus(200);
});

$app->get('/test1', function (Request $request, Response $response, $args) {
    $response->getBody()->write("order actived!!!");
    return $response;
});

$app->get('/order/{id}', function (Request $request, Response $response, $args) {
    $conn = $GLOBALS['connect'];
    $sql = 'select * from orders where order_id = ?';
    $stmt = $conn->prepare($sql);

    $stmt->bind_param('s', $args['id']);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    foreach ($result as $row) {
        array_push($data, $row);
    }

    $response->getBody()->write(json_encode($data, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK));
    return $response
        ->withHeader('Content-Type', 'application/json; charset=utf-8')
        ->withStatus(200);
});

$app->get('/orderofref/{ref_id}', function (Request $request, Response $response, $args) {
    $conn = $GLOBALS['connect'];
    $sql = 'select * from orders where ref_id = ?';
    $stmt = $conn->prepare($sql);

    $stmt->bind_param('s', $args['ref_id']);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    foreach ($result as $row) {
        array_push($data, $row);
    }

    $response->getBody()->write(json_encode($data, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK));
    return $response
        ->withHeader('Content-Type', 'application/json; charset=utf-8')
        ->withStatus(200);
});

$app->get('/test3/{id}', function (Request $request, Response $response, $args) {
    $id = $args['id'];
    $response->getBody()->write("test $id");
    return $response;
});

$app->get('/insertorder/{menu}/{price}/{count}/{total_price}/{ref_id}', function (Request $request, Response $response, $args) {
    $menu = $args['menu'];
    $price = $args['price'];
    $count = $args['count'];
    $total_price = $args['total_price'];
    $ref_id = $args['ref_id'];

    $conn = $GLOBALS['connect'];
    $sql = "INSERT INTO `orders`(`menu`, `price`, `count`, `total_price`, `ref_id`) 
    VALUES ('$menu', '$price', '$count', '$total_price', '$ref_id')";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $response->getBody();
    return $response;
});

$app->get('/deleteorder/{order_id}', function (Request $request, Response $response, $args) {
    $order_id = $args['order_id'];

    $conn = $GLOBALS['connect'];
    $sql = "DELETE FROM `orders` WHERE order_id = '$order_id'";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $response->getBody()->write("deleted $order_id on database ");
    return $response;
});

$app->get('/findlastreceipt', function (Request $request, Response $response, $args) {
     $conn = $GLOBALS['connect'];
    $sql = "SELECT ref_id
    FROM receipts
    ORDER BY date_time DESC LIMIT 1";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = array();
    foreach ($result as $row) {
        array_push($data, $row);
    }

    $response->getBody()->write(json_encode($data, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK));
    return $response
        ->withHeader('Content-Type', 'application/json; charset=utf-8')
        ->withStatus(200);
});