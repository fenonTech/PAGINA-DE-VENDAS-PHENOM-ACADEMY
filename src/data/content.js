import {
  ValidationIcon,
  StoreIcon,
  TrafficIcon,
  AutomationIcon,
} from '../components/icons';

export const CHECKOUT_URL = 'https://pay.cakto.com.br/r36uksp_988642';

export const SOCIAL_LINKS = [
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/phen6m/' },
  { label: 'YOUTUBE', href: 'https://www.youtube.com/@povphenom' },
  { label: 'TIKTOK', href: 'https://www.tiktok.com/@phen6m' },
];

export const STATS = [{ value: 'R$11M+', label: 'FATURADOS GLOBALMENTE' }];

export const DOR_ITEMS = [
  {
    num: '01',
    text: 'Acordar cedo. Bater o cartão. Ser um bom funcionário. Mesmo assim, sua conta nunca muda, você trabalha o ano inteiro pra ganhar o mesmo de sempre.',
  },
  {
    num: '02',
    text: 'O sistema não te trava por falta de esforço. Ele foi feito pra te manter trocando tempo por dinheiro, uma equação que nunca vai te deixar rico, só cansado.',
  },
  {
    num: '03',
    before: 'Cada mês trabalhando só pro boleto é um mês a menos construindo algo que trabalha ',
    bold: 'PRA você',
    after: '.',
  },
];

export const PILLARS = [
  {
    Icon: ValidationIcon,
    title: 'Validação global',
    desc: 'Como identificar produtos com potencial em múltiplos mercados antes de investir em tráfego.',
  },
  {
    Icon: StoreIcon,
    title: 'Loja e checkout internacional',
    desc: 'Estrutura de loja e checkout que converte em qualquer país, com pagamento local.',
  },
  {
    Icon: TrafficIcon,
    title: 'Tráfego Global',
    desc: 'Tráfego Orgânico que converte em qualquer idioma e mercado.',
  },
  {
    Icon: AutomationIcon,
    title: 'Automação e escala',
    desc: 'Sistemas e processos pra escalar a operação sem virar refém do dia a dia.',
  },
];
