import 'package:flutter/material.dart';
import 'package:tft_analytics_mobile/models/Unit.dart';
import 'package:tft_analytics_mobile/theme/styles.dart'; 

var colorMap = {0:cost1, 1:cost2, 2:cost3, 3:cost4, 4:cost5};
Widget loadStars(int tier, int rarity){
    List<Widget> list = new List<Widget>();
    for(var i = 0; i < tier; i++){
      list.add(new               
        Icon(
          Icons.star,
          color: colorMap[rarity],
          size: 15,
        )
      );
    }
    return new Row(children: list);
}

Widget loadItems(List<int> items){
    List<Widget> list = new List<Widget>();
    for(var i = 0; i < items.length; i++){
      list.add(new               
        CircleAvatar(
          backgroundImage: NetworkImage('http://d2tjld7v9ietdh.cloudfront.net/items/${items[i] > 9 ? "" + items[i].toString() : "0" + items[i].toString()}.png'),
          maxRadius: 7.5,
        )
      );
    }
    return new Row(children: list);
}
class ChampionsAvatar extends StatelessWidget{
  final Unit champ;
  ChampionsAvatar({this.champ});
  @override 
  Widget build(BuildContext context){
    return Container(
      margin: EdgeInsets.symmetric(vertical: 4),
      width: 45,
      child: Column(
        children: <Widget>[
          loadStars(this.champ.tier, this.champ.rarity),
          SizedBox(height: 10),
          Container(
            decoration: BoxDecoration(
              boxShadow: [
                BoxShadow(
                  color: colorMap[this.champ.rarity],
                  spreadRadius: 3,
                  blurRadius: 4,
                  offset: Offset(0, 0), // changes position of shadow
                ),
              ],
              border: Border.all(width: 1 , color:colorMap[this.champ.rarity])
              ),
            child:Image(
              height: 45,
              width: 45,
              image:  NetworkImage('http://d2tjld7v9ietdh.cloudfront.net/champs/${this.champ.characterID}.png'),
            )
          ),
          SizedBox(height: 10),
          loadItems(this.champ.items),
        ],
      )
    );
 
  }
}