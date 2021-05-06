import 'package:flutter/material.dart';
import 'package:tft_analytics_mobile/theme/styles.dart'; 
import 'package:tft_analytics_mobile/models/Trait.dart';

class SynergiesAvatar extends StatelessWidget{
  final Trait trait;
  SynergiesAvatar({this.trait});

  @override 
  Widget build(BuildContext context){
    return Container(
      margin: EdgeInsets.symmetric(vertical: 4),
      width: 36,
      child: Column(
        children: <Widget>[
          Text('${trait.tierCurrent}/${trait.tierTotal}',style: TextStyle(color:white)),
          SizedBox(height:4),
          Image(
            height: 36,
            width: 36,
            image:  NetworkImage('http://d2tjld7v9ietdh.cloudfront.net/traits/${trait.style}/${trait.name}.png'),
          )
        ],
      )
    );
 
  }
}