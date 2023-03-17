<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->get('/receipts', function (Request $request, Response $response) {
    $conn = $GLOBALS['connect'];
    $sql = "SELECT ref_id 'ref_id',
    CONCAT(DATE_FORMAT(date_time, '%e %b ', 'th_TH'), (YEAR(date_time)+543), DATE_FORMAT(date_time, ' %H:%i น.')) 'date_time' ,
    table_id 'table_id', total_price 'total_price'
    FROM receipts
    ORDER BY date_time DESC";
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

$app->get('/receipt/{id}', function (Request $request, Response $response, $args) {
    $conn = $GLOBALS['connect'];
    $sql = 'select * from receipts where ref_id = ?';
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

$app->get('/test2', function (Request $request, Response $response, $args) {
    $response->getBody()->write("receipt actived!!!");
    return $response;
});

$app->get('/insertreceipt/{table_id}/{total_price}', function (Request $request, Response $response, $args) {
    $table_id = $args['table_id'];
    $total_price = $args['total_price'];

    $conn = $GLOBALS['connect'];
    $sql = "INSERT INTO `receipts`(`table_id`, `total_price`) 
    VALUES ('$table_id', '$total_price')";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $response->getBody();
    return $response;
});

$app->get('/deletereceipt/{ref_id}', function (Request $request, Response $response, $args) {
    $ref_id = $args['ref_id'];

    $conn = $GLOBALS['connect'];
    $sql = "DELETE FROM `receipts` WHERE ref_id = '$ref_id'";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $response->getBody()->write("deleted $ref_id on database ");
    return $response;
});