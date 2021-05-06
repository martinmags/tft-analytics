import 'package:flutter/material.dart';
import 'package:tft_analytics_mobile/theme/styles.dart'; 
class MatchHistoryCard extends StatelessWidget{
  @override 
  Widget build(BuildContext context){
    return Container(
      margin: EdgeInsets.all(16),
      padding: EdgeInsets.all(16),
      width: double.infinity,
      decoration: BoxDecoration(
        color: bg_card,
        borderRadius: BorderRadius.vertical(bottom:Radius.circular(15))
      ),
      child: Column(
        children: <Widget>[
          Row(
            children: <Widget>[
              
            ],
          ),
        ],
      )
    );
  }
}