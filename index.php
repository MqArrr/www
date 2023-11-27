<?php

$conn = mysql_connect('localhost', 'root', '');
if (!$conn) {
    die('Could not connect: ' . mysql_error());
}
mysql_select_db ('task2', $conn);

$template = tmpl_open('template.html');
$sql = 'SELECT id, name, address, phone FROM users';
$result = mysql_query($sql) or die('SQL error: '.mysql_error());

while($data = mysql_fetch_assoc($result)) {
    tmpl_iterate($template, 'row');
    tmpl_set($template, 'row', $data);
}

echo tmpl_parse($template);


?>
