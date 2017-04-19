<? 
require 'vendor/autoload.php';

if (isset($_POST['send']))
    {
        //set up message
        $send_to = $_POST['send_to'];
        $send_from = $_POST['send_from'];
        $subject = $_POST['subject'];

        $smtp = Mail::factory('smtp', array(
            'host' => 'ssl://smtp.sendgrid.net',
            'port' => '465',
            'username' => 'afc',
            'password' => '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'
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