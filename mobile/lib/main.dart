import 'package:flutter/material.dart';
import 'package:tft_analytics_mobile/screens/SummonerScreen.dart';
void main() => runApp(MyApp());

class MyApp extends StatelessWidget { 
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData( 
        primarySwatch: Colors.blue, 
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: SummonerScreen(),
    );
  }
}
 
