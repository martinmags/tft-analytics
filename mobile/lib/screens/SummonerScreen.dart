 
import 'package:flutter/material.dart'; 
import 'package:tft_analytics_mobile/theme/styles.dart';
import 'package:tft_analytics_mobile/widgets/MatchHistoryCard.dart'; 
import 'package:tft_analytics_mobile/data/Data.dart';
class SummonerScreen extends StatelessWidget{
 
  @override 
  Widget build(BuildContext context){ 
 
    return Scaffold(
      backgroundColor: bg_primary,
      appBar: AppBar(
        backgroundColor: bg_card,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.vertical(
            bottom: Radius.circular(10)
          )
        ),
        title: Center(
          child: Text('TFT ANALYTICS')
        ),
      ),
      body:
      ListView(
        children: <Widget>[
          MatchHistoryCard(match: m1,),
          MatchHistoryCard(match: m1,), 
          MatchHistoryCard(match: m1,), 
          MatchHistoryCard(match: m1,), 
        ],
      )
 
    );
  }
}