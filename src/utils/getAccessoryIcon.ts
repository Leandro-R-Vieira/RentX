import CarSvg from '../assets/car.svg';
import SpeedSvg from '../assets/speed.svg';
import ForceSvg from '../assets/force.svg';
import PeopleSvg from '../assets/people.svg';
import EnergySvg from '../assets/energy.svg';
import HybridSvg from '../assets/hybrid.svg';
import GasolineSvg from '../assets/gasoline.svg';
import ExchangeSvg from '../assets/exchange.svg';
import AccelerationSvg from '../assets/acceleration.svg';

export function getAccessoryIcon(type: string) {
  switch (type) {
    case 'speed':
      return SpeedSvg;
    case 'acceleration':
      return AccelerationSvg;
    case 'exchange':
      return ExchangeSvg;
    case 'hybrid_motor':
      return HybridSvg;
    case 'eletric_motor':
      return EnergySvg;
    case 'gasoline_motor':
      return GasolineSvg;
    case 'seats':
      return PeopleSvg;
    case 'turning_diameter':
      return ForceSvg;
    default:
      return CarSvg;
  }
}