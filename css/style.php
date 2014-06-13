<?
	$DIR = "style_config";
	$TEMPLATE = "template.txt";
	$EXTENSION = ".json";
	header("Content-Type: text/css");

	if(!array_key_exists("q", $_GET))
		exit(0);

	$course = $_GET["q"];
	if(!$course)
		exit(0);

	$colorScheme =
		json_decode(
			file_get_contents($DIR . "/" . $course . $EXTENSION)
		);
	if(!$colorScheme)
		exit(0);

	$content = file_get_contents($DIR . "/". $TEMPLATE);

	$len = count($colorScheme);
	for($i = 0; $i < $len; $i++)
	{
		$target = $i + 1;
		$pattern = "/__${target}__/";
		$content = preg_replace($pattern, "#" . $colorScheme[$i], $content);
	}

	print $content;
?>
