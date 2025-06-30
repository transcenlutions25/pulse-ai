import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN as string,
});

export async function generateVideo(prompt: string) {
  const output = await replicate.run(
    "stability-ai/stable-video-diffusion:db21e45e33e4b300d946accc6e3ffcb051097d37a3d41a119e4f668ac128a0e0",
    {
      input: {
        prompt,
        num_frames: 16,
        width: 512,
        height: 512,
      },
    }
  );

  return output;
}
