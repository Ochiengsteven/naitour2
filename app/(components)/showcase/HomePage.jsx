import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const HomePage = () => {
  return (
    <div className="w-screen mt-4 gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Explore Nairobi
          </p>
          <h4 className="text-white font-medium text-large">
            Discover the beauty of Kenya
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://karenblixengroup.com/wp-content/uploads/2018/03/nairobinationalparks-web.jpg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Experience the Culture
          </p>
          <h4 className="text-white font-medium text-large">
            A taste of the Kenyan culture
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadMqvSzeHzFC-b-xLlGzpKQ2vLWV8TOWuiw&s"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Beauty of the Wild
          </p>
          <h4 className="text-white font-medium text-large">
            Experience the wildlife in Kenya
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://africantravelcanvas.com/wp-content/uploads/2019/05/African-Travel-Canvas-Wildebeest-Animal-Facts-Wilderness-Safaris-1.jpg"
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Arts</p>
          <h4 className="text-black font-medium text-2xl">
            Visit Galleries within Nairobi
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://nellions.co.ke/wp-content/uploads/2022/03/pexels-suzy-hazelwood-3004909.jpg"
        />
        {/* <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter> */}
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Connect with People and Explore together
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Join a group of explorers
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/a7/72/ac.jpg"
        />
        {/* <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
              <p className="text-tiny text-white/60">
                Get a good night&apos;s sleep.
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button>
        </CardFooter> */}
      </Card>
      <Card className="w-[80vw] bg-transparent">
        <h3 className="w-full p-4 text-5xl text-white text-center">
          Explore the raw beauty of nairobi kenyan arts, nature, galleries and
          Kenyan culture through the stories. Choose from a wide variety of
          various destinations ranging from free to paid. Connect with fellow
          hikers, explorers and trip guides.
        </h3>
      </Card>
    </div>
  );
};

export default HomePage;
