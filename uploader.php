<?php
	//UPLOAD THE ZIP
	if( $_FILES['file']['name'] != "" )
	{
		copy ( $_FILES['file']['tmp_name'], "emails/" . $_FILES['file']['name'] ) 
		or die( "Could not copy file" );
	}
	else
	{
		die( "No file specified" );
	}

	//UNZIP THE ZIP
	$zip = new ZipArchive;
	$res = $zip->open('emails/' . $_FILES['file']['name']);
	if ($res === TRUE) {
		$zip->extractTo('emails');
		$zip->deleteName( $_FILES['file']['name']);
		$zip->close();
		echo 'ok';
	}
	else {
		echo 'failed';
	}

	//DELETE ALL ZIPS IN DIR
	foreach(glob('emails/*.zip') as $file){
		unlink($file);
	}
?>