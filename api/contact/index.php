<?php
// include_once('classes/sendmail.php');
// include_once('config.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$SendMailFailederrorMessage = "Something went wrong";
$SendMailEmptyerrorMessage = "Empty form";
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( !isset($_POST['name']) && !isset($_POST['email']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage
        ]
    ); 
    exit();
}

if ($_POST){
    http_response_code(200);
    $subject = 'Contact from: ' . $_POST['name'];
    $sendTo = 'edgespearprojects@gmail.com';
    $sendFrom = $_POST['email'];
    $message = $_POST['msg'];       
    //Actual sending email
    $headers = 'From: ' . $sendFrom . "\r\n" .
            'Reply-To: ' . $sendFrom . "\r\n" .
            'X-Sender: ' . $sendTo . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
    mail($sendTo, $subject, $message, $headers);
    echo json_encode(array("sent" => true));
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}
?>