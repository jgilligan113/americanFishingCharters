<? 
if (isset($_POST['redirect']))
    {
        //set up message
        $send_to = $_POST['send_to'];
        $send_from = $_POST['send_from'];
        $subject = $_POST['subject'];
        $redirect = $POST['redirect']

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
        @mail($send_to, $subject, $message, $header);

        header("Location: " . $redirect)
    }
?>