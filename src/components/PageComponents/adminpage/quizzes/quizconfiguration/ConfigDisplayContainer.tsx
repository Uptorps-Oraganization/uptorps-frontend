import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useConfigItemChoiceData } from "@/hooks/useConfigSelectionData";
import { quizConfigNameSchema, type QuizConfigNameType } from "@/typesnschemas/schemas/QuizSchema";
import type { QuizConfigType, QuizConfigUpdateStatusType } from "@/typesnschemas/types/DataTypes";
import { useIconHover } from "@animateicons/react";
import { CirclePlusIcon } from "@animateicons/react/lucide";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckIcon, CircleXIcon, LayersIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ConfigurationItem } from "./ConfigItem";

export const ConfigDisplayContainer = (props: { configType: QuizConfigType }) => {
  const { configItemData, configQueryData } = useConfigItemChoiceData();

  const { ref: addRef, triggerProps } = useIconHover({ trigger: "hover" });

  const [showInput, setShowInput] = useState(false);
  const [acceptLoading, setAcceptLoading] = useState(false);

  const [uploadStatus, setUploadStatus] = useState<QuizConfigUpdateStatusType>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: formReset,
  } = useForm<QuizConfigNameType>({
    resolver: zodResolver(quizConfigNameSchema),
  });

  const handleConfigUpload: SubmitHandler<QuizConfigNameType> = (data) => {
    setAcceptLoading(true);
    setTimeout(() => {
      const { difficulty, level, programme } = configQueryData;

      if (props.configType === "level") {
        const refinedLevelRequestData = { difficulty, name: data.name };
        console.log("Level Added", refinedLevelRequestData);
      }

      if (props.configType === "programme") {
        const refinedProgrammeRequestData = { difficulty, level, name: data.name };
        console.log("Programme Added", refinedProgrammeRequestData);
      }

      if (props.configType === "course") {
        const refinedCourseRequestData = { difficulty, level, programme, name: data.name };
        console.log("Course Added", refinedCourseRequestData);
      }

      setAcceptLoading(false);
      showUploadStatusBadge("failure");
      formReset();
    }, 1000);
  };

  const showUploadStatusBadge = (status: QuizConfigUpdateStatusType) => {
    setUploadStatus(status);
    setTimeout(() => {
      setUploadStatus(null);
    }, 1000);
  };

  if (props.configType === "difficulty") {
    return (
      <>
        <motion.div
          key={props.configType}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="px-10 space-y-4"
        >
          <section className="grid grid-cols-3 gap-3">
            {configItemData?.map((item, index) =>
              typeof item === "object" && "difficulty" in item ? <ConfigurationItem key={index} name={item.difficulty} type="difficulty" description={item.description} /> : null,
            )}
          </section>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <motion.div
        key={props.configType}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="px-10 space-y-4"
      >
        <section className="flex flex-row gap-2">
          <Button onClick={() => setShowInput(true)} className="px-10 h-10" {...triggerProps}>
            <CirclePlusIcon ref={addRef} />
            Add {props.configType[0].toUpperCase() + props.configType.slice(1)}
          </Button>
        </section>

        {showInput && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              duration: 0.5,
            }}
            className="flex flex-col"
          >
            <section className="w-fit flex flex-row items-center gap-2">
              <form id="config-input-form" onSubmit={handleSubmit(handleConfigUpload)}>
                <Input
                  className="min-w-60"
                  {...register("name")}
                  type="text"
                  placeholder={
                    props.configType === "level" ? "Type the level here....." : props.configType === "programme" ? "Type the programme here....." : "Type the course here....."
                  }
                />
              </form>

              <div className="w-fit flex flex-row items-center gap-2">
                {acceptLoading && <Spinner className="mr-0! size-3!" />}

                <Button type="submit" form="config-input-form" className="size-7 text-white bg-green-500 rounded-full hover:text-green-500" variant="ghost">
                  <CircleCheckIcon />
                </Button>

                <Button
                  onClick={() => {
                    setShowInput(false);
                    formReset();
                  }}
                  className="size-7 text-white bg-destructive rounded-full hover:text-destructive"
                  variant="ghost"
                >
                  <CircleXIcon />
                </Button>
              </div>

              {uploadStatus == "success" && (
                <Badge className="badge_in_table text-green-500 bg-green-500/10">
                  <LayersIcon className="size-3" />
                  {props.configType[0].toUpperCase() + props.configType.slice(1)} Added
                </Badge>
              )}

              {uploadStatus == "failure" && (
                <Badge className="badge_in_table text-destructive bg-destructive/10">
                  <XIcon className="size-3" />
                  {props.configType[0].toUpperCase() + props.configType.slice(1)} Not Added
                </Badge>
              )}
            </section>

            {errors && <p className="text-[12px] font-medium text-destructive">{errors.name?.message}</p>}
          </motion.div>
        )}

        {(props.configType === "level" || props.configType === "programme" || props.configType === "course") && (
          <section className="grid grid-cols-3 gap-3">
            {configItemData?.map((item, index) => {
              if (props.configType === "level" && typeof item === "object" && "level" in item) {
                return <ConfigurationItem key={index} name={item.level} type="level" />;
              }

              if (props.configType === "programme" && typeof item === "object" && "programme" in item) {
                return <ConfigurationItem key={index} name={item.programme} type="programme" />;
              }

              if (props.configType === "course" && typeof item === "string") {
                return <ConfigurationItem key={index} name={item} type="course" />;
              }
            })}
          </section>
        )}
      </motion.div>
    </>
  );
};
