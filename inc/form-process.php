<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';


$toemails = array();

$toemails[] = array(
				'email' => 'user@yourmail.com', // Your Email Address
				'name' => 'Your Name' // Your Name
			);

$mail = new PHPMailer();

// If you intend to use SMTP, add your SMTP Code after this line


if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
	if( $_POST['e24_contact_email'] != '' ) {

		$name = $_POST['e24_contact_name'];
		$email = $_POST['e24_contact_email'];
		$message = $_POST['e24_contact_message'];

		$subject = 'New message from contact form';

		
            $mail->SetFrom( $email , $name );
			
			foreach( $toemails as $toemail ) {
				$mail->AddAddress( $toemail['email'] , $toemail['name'] );
			}
			$mail->Subject = $subject;

			$name = isset($name) ? "Name: $name<br><br>" : '';
			$email = isset($email) ? "Email: $email<br><br>" : '';
			$message = isset($message) ? "Message: $message<br><br>" : '';

			$referrer = $_SERVER['HTTP_REFERER'] ? '<br><br><br>This form was submitted from: ' . $_SERVER['HTTP_REFERER'] : '';

			$body = "$name $email $message $referrer";

			$mail->MsgHTML( $body );
			$sendEmail = $mail->Send();
    }
}
?>