import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Platform,
  Dimensions,
  Alert,
  TouchableHighlight,
} from "react-native";
import MapView , { Marker, UrlTile } from "react-native-maps";
import MyLocationMapMarker from "./MyLocationMapMarker";
import SingleShop from "./SingleShop";


const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width * 80 / 100;

const ASPECT_RATIO = width / height;
const LATITUDE = 48.78825;
const LONGITUDE = -0.5324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface MapTestProps {
  onProject: ProjectCallback;
}

class Position {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}


export default class MapTest extends Component<MapTestProps> {
  constructor(props:any){
    super(props);

  }
  
  scrollView = null;
  state = {
    markers: [
      {
        coordinate: {
          latitude: 44.804896,
          longitude: -1.220573,
        },
        title: "234 avenue de Gaulle",
        localisation: "Cap Ferret, France",
      },
      {
        coordinate: {
          latitude: 45.590060,
          longitude: -1.176335,
        },
        title: "Phare Rouge",
        localisation: "Soulac-sur-mer, France",
      },
      {
        coordinate: {
          latitude: 43.6505726,
          longitude: -1.4390466,
        },
        title: "Casino",
        localisation: "Capbreton, France",
      }
    ],
    region: {
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0,
      longitudeDelta: 0.5,
    },
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  
  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.8); // animate 80% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            650
          );
        }
      }, 10);
    });
  }

  onProject(project: any) {
    const { onProject } = this.props;
    onProject && onProject(project);
  }

  _onMap(map) {
    const { markers_filter } = this.props;
    this.map = map;
    if(this.map && markers_filter) {
      this.map.fitToSuppliedMarkers(markers_filter, true);
    }
  }

  fitToSuppliedMarkers(optional_array) {
    if(!optional_array) optional_array = this.props.markers_filter;

    if(optional_array && this.map) {
      this.map.fitToSuppliedMarkers(optional_array, true);
    }
  }


  render() {
    const { markers, markers_filter } = this.props;

    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });

    return (
      <View style={styles.container}>
         
        <MapView
          style={styles.container}
          showsUserLocation={true}
          ref={r => this._onMap(r)}
          onUserLocationChange={(location) => {}}
          showsCompass={false}
        >
        <MyLocationMapMarker
            key="my_location"
            title="Your current position" 
        />
          {
            this.state.markers.map(marker =>  
            <MapView.Marker 
              coordinate={marker.coordinate}
            >
              <Animated.View style={[styles.markerWrap]}>
                <Animated.View />
                <View style={styles.marker}>
                  <Image
                    source={require('../assets/img/localisation.png')}
                    style={{width: 10, height: 10}}
                  />
                </View>
              </Animated.View>
            </MapView.Marker>
            )
          }

        </MapView>

        <Animated.ScrollView
          horizontal
          ref={scrollview => this.scrollView = scrollview}
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <SingleShop marker={marker} index={index} scrollView={this.scrollView} onProjectPress={(project) => this.onProject(project)}/>
          ))
          }
        </Animated.ScrollView>

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#004492",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
  }
});