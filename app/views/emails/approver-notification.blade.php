<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
</head>
<body>
<h2>Asset has been sent to you.</h2>

<div>
    To view the asset, open this link to view it: {{ $link }}.<br/>
    The asset will expire in {{ Config::get('toogether.files.expire') }} minutes.
</div>
</body>
</html>
