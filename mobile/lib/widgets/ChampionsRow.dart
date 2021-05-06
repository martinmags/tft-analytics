import 'package:flutter/material.dart';
import 'package:tft_analytics_mobile/theme/styles.dart'; 
import 'package:tft_analytics_mobile/data/Data.dart'; 
import 'package:tft_analytics_mobile/widgets/ChampionAvatar.dart';
import 'package:tft_analytics_mobile/models/Unit.dart';

Widget loadChamps(List<Unit> champs){
    List<Widget> list = new List<Widget>();
    for(var i = 0; i < champs.length; i++){
      list.add(new ChampionsAvatar(champ: champs[i]));
    }
    return new Wrap(
      direction: Axis.horizontal,
      spacing: 16.0,
      runSpacing: 4.0,
      children: list,
    );
}

class ChampionsRow extends StatelessWidget{
  final List<Unit> champs;
  ChampionsRow({this.champs});

  @override 
  Widget build(BuildContext context){
    return  loadChamps(this.champs);
  }
}