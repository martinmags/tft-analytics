import 'package:flutter/material.dart';
class SearchBarDropDown extends StatefulWidget {
  SearchBarDropDown({Key key}) : super(key: key);

  @override
  _SearchBarDropDown createState() => _SearchBarDropDown();
}

class _SearchBarDropDown extends State<SearchBarDropDown> {
  String dropdownValue = 'na1';

  @override
  Widget build(BuildContext context) {
    return DropdownButton<String>(
      value: dropdownValue,
      icon: Icon(Icons.arrow_downward),
      iconSize: 16,
      elevation: 16,
      style: TextStyle(color: Colors.deepPurple),
      underline: Container(
        height: 2,
        color: Colors.deepPurpleAccent,
      ),
      onChanged: (String newValue) {
        setState(() {
          dropdownValue = newValue;
        });
      },
      items: <String>['na1','br1','oc1','la1','la2','jp1','kr','eun1','euw1','tr1','ru']
          .map<DropdownMenuItem<String>>((String value) {
        return DropdownMenuItem<String>(
          value: value,
          child: Text(value),
        );
      }).toList(),
    );
  }
}