export class ObservationTag{
  observationTagId: number;
  partentObservationTagId: number;
  observationTagName: string;
} 

export class ObservationTagTree{
  observationTagId: number;
  partentObservationTagId: number;
  observationTagName: string;
  children: ObservationTagTree;
} 
