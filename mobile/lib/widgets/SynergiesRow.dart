import 'package:flutter/material.dart';
import 'package:tft_analytics_mobile/models/Trait.dart'; 
import 'package:tft_analytics_mobile/widgets/SynergyAvatar.dart';

Widget loadTraits(List<Trait> traits){
    List<Widget> list = new List<Widget>();
    for(var i = 0; i < traits.length; i++){
      list.add(new SynergiesAvatar(trait: traits[i],));
    }
    return new Wrap(
      direction: Axis.horizontal,
      spacing: 4.0,
      runSpacing: 4.0,
      children: list,
    );
}

class SynergiesRow extends StatelessWidget{
  final List<Trait> traits;
  SynergiesRow({this.traits});
  @override 
  Widget build(BuildContext context){
    return  loadTraits(traits);
  }
}