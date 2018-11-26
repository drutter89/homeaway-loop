for ( var i = 100; i <= 200; i++ )
{
  if ( i%3 === 0 && i%4 === 0 )
  {
    console.log( i + " HomeAway" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Home" );
  }
  else if ( i%4 === 0 ) 
  {
    console.log(i+ " Away" );
  }
  else
  {
    console.log(i);
  }
}