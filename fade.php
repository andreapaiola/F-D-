<?php

error_reporting(E_ALL); // yeah I want to see all

//date_default_timezone_set('Europe/London'); // remember to eventually set the right timezone

class FadePaid
{
	private $opacity=1;
	public function __construct() {
		$start = time() + (7 * 24 * 60 * 60); // default next week, change to what you want

		$end = $start + (7 * 24 * 60 * 60); // default a week later, change to what you want		

		/*
		// Testing
		
		//$start = time() - (0 * 24 * 60 * 60); // 0 day ago
		//$start = time() - (1 * 24 * 60 * 60); // 1 day ago
		//$start = time() - (1 * 24 * 60 * 60); // 2 day ago
		//$start = time() - (3 * 24 * 60 * 60); // 3 days ago
		$start = time() - (5 * 24 * 60 * 60); // 5 days ago
		//$start = time() - (6 * 24 * 60 * 60); // 6 days ago
		//$start = time() - (7 * 24 * 60 * 60); // 7 days ago
		$end = $start + (7 * 24 * 60 * 60); // now you have 7 days to pay
		//$end = $start + (3 * 24 * 60 * 60); // now you have 3 days to pay
		*/	

		if( time() > $end ) {
			$this->opacity = 0; // YOU ARE TERMINATED
		} elseif( $start <= time() && $end >= time() ) {
			$this->opacity = ( $end - time() ) / ( $end - $start );
		}		
	}
	public function getOpacity()
	{
		return $this->opacity;
	}
}


$fadePaid = new FadePaid;

echo 'opacity:'.$fadePaid->getOpacity();


