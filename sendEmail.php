<? 
require_once "Mail.php";

if (isset($_POST['redirect']))
    {
        //set up message
        $send_to = $_POST['send_to'];
        $send_from = $_POST['send_from'];
        $subject = $_POST['subject'];
        $redirect = $POST['redirect'];

        $smtp = Mail::factory('smtp', array(
            'host' => 'ssl://smtp.gmail.com',
            'port' => '465',
            'auth' => true,
            'username' => 'admin@fishingtybee.com',
            'password' => 'FishingTybee17'
        ))

        //set up header
        $header = "From: " . $send_from . "\r\n";
        $header .="X-Mailer: PHP/" . phpversion();

        //build the message
        foreach ($_POST as $key=>$value)
        {
            $message .= $key . ": " . $value . "\r\n";
        }

        //send the email
        //The '@' supresses errors
        $mail = smtp->send($send_to, $subject, $message, $header);

        header("Location: " . $redirect)
    }
?>