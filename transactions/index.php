<?php 

try{
    require_once __DIR__.'/_.php';
    $db = _db();
    $db->beginTransaction();


    // Take 5 from A
    $transfer = 5;
    $q = $db->prepare(' UPDATE users
                        SET user_balance = user_balance - :transfer
                        WHERE user_id = 1
                        ');
    $q->bindValue(':transfer', $transfer);
    $q->execute();

    if( 'a' != 'b' ){
        throw new Exception('Really bad error');
    }

    // Add 5 to B
    $q = $db->prepare(' UPDATE users
                        SET user_balance = user_balance + :transfer
                        WHERE user_id = 2
                        ');
    $q->bindValue(':transfer', $transfer);
    $q->execute();

    $db->commit();
    echo 'Transfer ok';

}catch(Exception $ex){
    echo $ex;
    $db->rollBack();
}
