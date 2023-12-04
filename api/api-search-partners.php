<?php 
header('Content-Type: application/json');
require_once __DIR__.'/../_.php';
try{
    // TODO: Validation for the serach (user_name_or_last_name)
    $db = _db();
    $user_role_name = 'partner';
    $q = $db->prepare("SELECT user_name, user_last_name, user_role_name
        FROM users
        WHERE user_name LIKE :user_name COLLATE NOCASE 
        AND user_role_name = 'partner' 
        OR user_last_name LIKE :user_last_name
        AND user_role_name = 'partner' 
    ");

    $q->bindValue(':user_name', "%{$_POST['query']}%");
    $q->bindValue(':user_last_name', "%{$_POST['query']}%");
    $q->execute();
    $partners = $q->fetchAll();
    echo json_encode($partners);

}catch(Exception $e){
        $status_code = !ctype_digit($e->getCode()) ? 500 : $e->getCode();
        $message = strlen($e->getMessage()) == 0 ? 'error - '.$e->getLine() : $e->getMessage();
        http_response_code($status_code);
        echo json_encode(['info'=>$message]);
}