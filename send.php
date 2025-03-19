<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'php mailer/Exception.php';
require 'php mailer/PHPMailer.php';
require 'php mailer/SMTP.php';
//Create an instance; passing `true` enables exceptions
$mailPrimary = new PHPMailer(true);
$name = !empty($_POST['name']) ? $_POST['name'] : 'Data Not Available';
$organization = !empty($_POST['organization']) ? $_POST['organization'] : 'Data Not Available';
$designation = !empty($_POST['designation']) ? $_POST['designation'] : 'Data Not Available';
$officeAddress = !empty($_POST['office_address']) ? $_POST['office_address'] : 'Data Not Available';
$interestedFor = !empty($_POST['interested_for']) ? $_POST['interested_for'] : 'Data Not Available';
$city = !empty($_POST['city']) ? $_POST['city'] : 'Data Not Available';
$country = !empty($_POST['country']) ? $_POST['country'] : 'Data Not Available';
$mobileNo = !empty($_POST['mobile_no']) ? $_POST['mobile_no'] : 'Data Not Available';
$state = !empty($_POST['state']) ? $_POST['state'] : 'Data Not Available';
$email = !empty($_POST['email']) ? $_POST['email'] : 'Data Not Available';

try {
    $mailPrimary->isSMTP();
    $mailPrimary->Host       = 'smtp.zoho.in';
    $mailPrimary->SMTPAuth   = true;
    $mailPrimary->Username   = 'support@ndtsindia.com';
    $mailPrimary->Password   = ' #AyushNDTS2023';
    $mailPrimary->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mailPrimary->Port       = 465;

    $mailPrimary->setFrom('support@ndtsindia.com', 'NDTS INDIA - SUPPORT TEAM');
    $mailPrimary->addAddress($email, 'website');

    $mailPrimary->isHTML(true);
    $mailPrimary->Subject = 'www.ndtsindia.com - NDTS INDIA - SUPPORT TEAM'; 
    $mailPrimary->Body = "
        <p>Dear Sir/Madam,</p>
        
        <p>Thank you for reaching out to us. We have received your inquiry and are pleased to provide you with the proper response.</p>
        
        <p>If you require further assistance or have additional questions, please do not hesitate to contact us.</p>
        
        <p>You can reach our customer support team at <a href='mailto:support@ndtsindia.com'>support@ndtsindia.com</a> or by calling +91 9810005993.</p>
        
        <p>We value your feedback and look forward to assisting you further.</p>
        
        <p>Best regards,</p>
        <p>Praveen Sharma</p>
        <p>Team NDTS India</p>
        <p>Mob : +91-9810005993</p>
        
        <p>Website: <a href='http://www.ndtsindia.com'>www.ndtsindia.com</a></p>
    ";

    // Send the email to the primary recipient
    $mailPrimary->send();

    // Create a message for sachinu967@gmail.com

    $copyEmail = 'info@ndtsindia.com';
    $subjectCopy = 'www.ndtsindia.com - Query';
    $messageCopy = "
    <table style='border-collapse: collapse; width: 60%; border: 1px solid #000;'>
        <tr>
            <td style='border: 1px solid #000; padding: 5px;'><b>Name :</b></td>
            <td style='border: 1px solid #000; padding: 5px;'>$name</td>
        </tr>
        <tr>
            <td style='border: 1px solid #000; padding: 5px;'><b>Organization :</b></td>
            <td style='border: 1px solid #000; padding: 5px;'>$organization</td>
        </tr>
        <tr>
            <td style='border: 1px solid #000; padding: 5px;'><b>Designation :</b></td>
            <td style='border: 1px solid #000; padding: 5px;'>$designation</td>
        </tr>
        <tr>
            <td style='border: 1px solid #000; padding: 5px;'><b>Office Address :</b></td>
            <td style='border: 1px solid #000; padding: 5px;'>$officeAddress</td>
        </tr>
        <tr>
            <td style='border: 1px solid #000; padding: 5px;'><b>Interested For :</b></td>
            <td style='border: 1px solid #000; padding: 5px;'>$interestedFor</td>
        </tr>
        <tr>
            <td style='border: 1px solid #000; padding: 5px;'><b>City :</b></td>
            <td style='border: 1px solid #000; padding: 5px;'>$city</td>
        </tr>
        <tr>
            <td style='border: 1px solid #000; padding: 5px;'><b>State :</b></td>
            <td style='border: 1px solid #000; padding: 5px;'>$state</td>
        </tr>
        <tr>
            <td style='border: 1px solid #000; padding: 5px;'><b>E-Mail :</b></td>
            <td style='border: 1px solid #000; padding: 5px;'>$email</td>
        </tr>
        <tr>
            <td style='border: 1px solid #000; padding: 5px;'><b>Mobile No :</b></td>
            <td style='border: 1px solid #000; padding: 5px;'>$mobileNo</td>
        </tr>
    </table>
    <br>
    Thanks & Regards<br>
    Team NDTS India<br>
    <a href='http://www.ndtsindia.com'>www.ndtsindia.com</a>
    ";

    $mailCopy = new PHPMailer(true);
    $mailCopy->isSMTP();
    $mailCopy->Host       = 'smtp.zoho.in';
    $mailCopy->SMTPAuth   = true;
    $mailCopy->Username   = 'support@ndtsindia.com';
    $mailCopy->Password   = ' #AyushNDTS2023';
    $mailCopy->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mailCopy->Port       = 465;
    $mailCopy->setFrom('support@ndtsindia.com', 'NDTS INDIA - SUPPORT TEAM');
    $mailCopy->addAddress($copyEmail, 'User Copy');
    $mailCopy->isHTML(true);
    $mailCopy->Subject = $subjectCopy;
    $mailCopy->Body    = $messageCopy;

    // Send the copy email to sachinu967@gmail.com
    $mailCopy->send();

    header("Location: getintouch.php?success=true");
    exit();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mailPrimary->ErrorInfo}";
}
?>
