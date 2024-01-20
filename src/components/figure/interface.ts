export interface DataScore {
  dataMember: { title: string; score: string };
  dataCourse: { title: string; score: string };
}

export interface DataProps {
  data: DataScore;
}
