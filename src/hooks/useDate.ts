import { useState, useEffect } from "react";

/**
 * Hook personalizado para gerenciar data e hora
 * @param updateInterval - Intervalo em milissegundos para atualizar a data (opcional)
 * @returns Objeto com informações de data e hora
 */
export const useDate = (updateInterval?: number) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (!updateInterval) return;

    const timer = setInterval(() => {
      setDate(new Date());
    }, updateInterval);

    return () => clearInterval(timer);
  }, [updateInterval]);

  const formatDate = (format: "short" | "long" | "year" = "short") => {
    const options: Record<string, Intl.DateTimeFormatOptions> = {
      short: {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      },
      long: {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      year: {
        year: "numeric",
      },
    };

    return date.toLocaleDateString("pt-BR", options[format]);
  };

  const formatTime = (format: "12h" | "24h" = "24h") => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      ...(format === "12h" && { hour12: true }),
    };

    return date.toLocaleTimeString("pt-BR", options);
  };

  const getCurrentYear = () => date.getFullYear();

  const getCurrentMonth = () => {
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return months[date.getMonth()];
  };

  const getCurrentDay = () => {
    const days = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    return days[date.getDay()];
  };

  return {
    date,
    formatDate,
    formatTime,
    getCurrentYear,
    getCurrentMonth,
    getCurrentDay,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
};
