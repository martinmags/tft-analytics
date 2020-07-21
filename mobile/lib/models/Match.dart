import 'package:tft_analytics_mobile/models/Trait.dart';
import 'package:tft_analytics_mobile/models/Unit.dart';

class Match { 
  final int level;
  final int position;
  final int queue;
  final List<Trait> traits;
  final List<Unit> units;

  Match({this.level, this.position, this.queue, this.traits, this.units});

}