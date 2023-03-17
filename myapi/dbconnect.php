<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'muta';

    $connect = new mysqli($servername, $username, $password, $dbname);
    $connect->set_charset("utf8");


