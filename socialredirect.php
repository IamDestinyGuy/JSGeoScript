<?php
    $userAgent = $_SERVER['HTTP_USER_AGENT'];
    $redirectURL = $_GET['redirect'];

    if (strpos($userAgent, 'Instagram')) {
        // trick the android instagram in-app by trying to download a file.
        // This will open the link in the system browser instead.
        header('Content-type: application/pdf');
        header('Content-Disposition: inline; filename=dummy');
        header('Content-Transfer-Encoding: binary');
        header('Accept-Ranges: bytes');
    }
    else {
        header('Location: ' . $redirectURL);
    }
?>