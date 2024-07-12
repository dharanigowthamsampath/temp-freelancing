import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Bus,
  HomeIcon,
  IndianRupee,
  MessageCircle,
  Phone,
  Train,
  Utensils,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type Props = {
  price: string;
  tech: string;
  location: string;
  skills: string[];
  requirements: string;
  call?: string;
  whatsapp?: string;
};

const UserCard = (props: Props) => {
  return (
    <div>
      <Card className=" w-[350px]">
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between">
              <div>
                {props.price}
                <span className="text-sm text-muted-foreground">/day</span>
              </div>
              <div className="text-lg text-muted-foreground">{props.tech}</div>
            </div>
          </CardTitle>
          <CardDescription>{props.location}</CardDescription>
          <div className="flex flex-wrap gap-1">
            {props.skills.map((skill, index) => (
              <Badge key={index}>{skill}</Badge>
            ))}
          </div>
        </CardHeader>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-6">More Details</AccordionTrigger>
            <AccordionContent>
              <CardContent>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex w-full items-center justify-around space-x-2">
                    <div className="text-teal-700 font-extrabold text-xl">
                      22-10-2024
                    </div>
                    <Separator
                      orientation="vertical"
                      className="h-5 w-0.5 border-fuchsia-800"
                    />
                    <div className="text-red-700 font-extrabold text-xl">
                      22-11-2024
                    </div>
                  </div>
                </div>
                {/* <div className="pt-4">
                  <div className="flex flex-row flex-wrap">
                    <div className="p-2 flex flex-wrap justify-start space-x-2 ">
                      <div className="bg-muted pt-1 pb-1 pl-4 pr-4 mb-2 w-full sm:w-auto flex items-center justify-center rounded space-x-2">
                        <Utensils className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-sm">
                          Food
                        </span>
                      </div>
                      <div className="bg-muted pt-1 pb-1 pl-4 pr-4 mb-2 w-full sm:w-auto flex items-center justify-center rounded space-x-1">
                        <HomeIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-sm">
                          Stay
                        </span>
                      </div>
                      <div className="bg-muted pt-1 pb-1 pl-4 pr-4 mb-2 w-full sm:w-auto flex items-center justify-center rounded space-x-1">
                        <Bus className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-sm">
                          Travel
                        </span>
                      </div>
                      <div className="bg-muted pt-1 pb-1 pl-4 pr-4 mb-2 w-full sm:w-auto flex items-center justify-center rounded space-x-1">
                        <Bus className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-sm">
                          Travel
                        </span>
                      </div>
                      <div className="bg-muted pt-1 pb-1 pl-4 pr-4 mb-2 w-full sm:w-auto flex items-center justify-center rounded space-x-1">
                        <Bus className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-sm">
                          Travel
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>{props.requirements}</div>
                </div> */}
                <div className="pt-4">
                  <div className="grid grid-cols-3 gap-4 pb-4">
                    <div className="bg-muted pt-1 pb-1 pl-4 pr-4 flex items-center justify-center rounded space-x-2">
                      <Utensils className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">
                        Food
                      </span>
                    </div>
                    <div className="bg-muted pt-1 pb-1 pl-4 pr-4 flex items-center justify-center rounded space-x-2">
                      <HomeIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">
                        Stay
                      </span>
                    </div>
                    <div className="bg-muted pt-1 pb-1 pl-4 pr-4 flex items-center justify-center rounded space-x-1">
                      <Train className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">
                        Trans
                      </span>
                    </div>
                    <div className="bg-muted pt-1 pb-1 pl-4 pr-4 flex items-center justify-center rounded space-x-2">
                      <IndianRupee className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground text-sm">TDS</span>
                    </div>
                  </div>
                  <div>{props.requirements}</div>
                </div>
              </CardContent>
              <CardFooter className="space-x-4">
                <Button className=" w-full space-x-2" variant="secondary">
                  <Phone className="h-4 w-4" /> <span>Call</span>
                </Button>
                <Button className=" w-full space-x-2">
                  <MessageCircle className="h-4 w-4" /> <span>Whatsapp</span>
                </Button>
              </CardFooter>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
};

export default UserCard;
