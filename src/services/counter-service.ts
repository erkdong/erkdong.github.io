import { sendPostRequest } from "./util";

export type GetCountResponse = {
  count: number;
};

export type SaveCountResponse = {};

class CounterService {
  jwt?: string;

  async getCount(): Promise<GetCountResponse> {
    const getCountUrl: string = process.env.GET_COUNT_URL!;

    const fetchUrl = new URL(getCountUrl);
    fetchUrl.searchParams.append("queryParam", "");

    const response = await fetch(fetchUrl.toString());
    return response
      .json()
      .then((responseBody) => responseBody as GetCountResponse);
  }

  async saveCount(): Promise<SaveCountResponse> {
    const saveCountUrl: string = process.env.SAVE_COUNT_URL!;

    const response = await sendPostRequest(saveCountUrl, {
      requestArg: "",
    });

    return response
      .json()
      .then((responseBody) => responseBody as SaveCountResponse);
  }
}

export default CounterService;
