// PolylineDecoder.js
import polyline from '@mapbox/polyline';

export const decodePolyline = (encodedPolyline) => {
  return polyline.decode(encodedPolyline).map((point) => [point[0], point[1]]);
};
