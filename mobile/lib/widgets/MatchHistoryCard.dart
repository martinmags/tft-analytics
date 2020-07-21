import 'package:flutter/material.dart';
import 'package:tft_analytics_mobile/theme/styles.dart';
import 'package:tft_analytics_mobile/widgets/ChampionsRow.dart';
import 'package:tft_analytics_mobile/widgets/SynergiesRow.dart';  
import 'package:tft_analytics_mobile/models/Match.dart';
class MatchHistoryCard extends StatelessWidget{
  final Match match;
  MatchHistoryCard({this.match});
  @override 
  Widget build(BuildContext context){
    return  Column(
      children: <Widget>[
        Container(
          margin: EdgeInsets.fromLTRB(16, 16, 16, 0),
          decoration: BoxDecoration(
            color: place1,
            borderRadius: BorderRadius.vertical(top:Radius.circular(15))
          ),
          height:15
        ),
        Container(
          margin: EdgeInsets.symmetric(horizontal: 16),
          padding: EdgeInsets.all(16),
          width: double.infinity,
          decoration: BoxDecoration(
            color: bg_card,
            borderRadius: BorderRadius.vertical(bottom:Radius.circular(15))
          ),
          child:Column(
            crossAxisAlignment: CrossAxisAlignment.start,
             children: <Widget>[
              Text('#${this.match.position}', style: TextStyle(color:white)),
              SizedBox(height:8),
              Text('Normal', style: TextStyle(color:white)),
              SizedBox(height:8),
              Text('Lvl ${this.match.level}', style: TextStyle(color:white)),
              SizedBox(height:16),
              SynergiesRow(traits: this.match.traits),
              ChampionsRow(champs: this.match.units)
            ],
          )
        )
      ],
    ) ;
  }
}